from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "unitree-g1-go2w-integration-one-pager.pdf"
IMAGE = ROOT / "public" / "assets" / "robot-lab-tactical-portrait.png"
CHINESE_FONT = Path("/System/Library/Fonts/STHeiti Medium.ttc")

BG = HexColor("#0A0A0A")
PANEL = HexColor("#101010")
INK = HexColor("#EAEAEA")
MUTED = HexColor("#9A9A9A")
LINE = HexColor("#3A3A3A")
RED = HexColor("#FF2A2A")
GREEN = HexColor("#4AF626")


def register_fonts():
    pdfmetrics.registerFont(TTFont("STHeiti", str(CHINESE_FONT), subfontIndex=0))


def text(c, x, y, value, font="Helvetica", size=10, color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, y, value)


def right_text(c, x, y, value, font="Helvetica", size=10, color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawRightString(x, y, value)


def line(c, x1, y1, x2, y2, color=LINE, width=0.6, dash=None):
    c.saveState()
    c.setStrokeColor(color)
    c.setLineWidth(width)
    if dash:
        c.setDash(dash)
    c.line(x1, y1, x2, y2)
    c.restoreState()


def crosshair(c, x, y, size=10, color=RED):
    line(c, x - size, y, x + size, y, color, 0.7)
    line(c, x, y - size, x, y + size, color, 0.7)
    c.setStrokeColor(color)
    c.setLineWidth(0.7)
    c.rect(x - 4, y - 4, 8, 8, stroke=1, fill=0)


def wrap_chinese(c, x, y, value, width, font="STHeiti", size=10, leading=15, color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    current = ""
    lines = []
    for char in value:
        test = current + char
        if pdfmetrics.stringWidth(test, font, size) <= width:
            current = test
        else:
            lines.append(current)
            current = char
    if current:
        lines.append(current)
    for item in lines:
        c.drawString(x, y, item)
        y -= leading
    return y


def build():
    register_fonts()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    width, height = landscape(A4)
    c = canvas.Canvas(str(OUTPUT), pagesize=(width, height), pageCompression=1)
    c.setTitle("Unitree G1 / Go2-W Robotics Integration")
    c.setAuthor("Li Huawei")
    c.setSubject("Autonomous navigation, security patrol, robotic arm and field sensor integration")

    c.setFillColor(BG)
    c.rect(0, 0, width, height, stroke=0, fill=1)

    # Technical grid and frame.
    for x in range(22, int(width), 24):
        line(c, x, 18, x, height - 18, HexColor("#181818"), 0.35)
    for y in range(18, int(height), 24):
        line(c, 18, y, width - 18, y, HexColor("#181818"), 0.35)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.rect(18, 18, width - 36, height - 36, stroke=1, fill=0)
    crosshair(c, 34, height - 34, 8)
    crosshair(c, width - 34, 34, 8)

    # Header.
    line(c, 18, height - 58, width - 18, height - 58, LINE, 0.8)
    text(c, 46, height - 43, "LI HUAWEI", "Helvetica-Bold", 12)
    text(c, 125, height - 43, "/ ROBOTICS INTEGRATION", "Courier", 8, MUTED)
    text(c, 360, height - 43, "PLATFORM / G1 + GO2-W", "Courier-Bold", 8, RED)
    right_text(c, width - 36, height - 43, "FIELD SYSTEM / REV 01", "Courier", 8, MUTED)

    # Left hero statement.
    left_x = 46
    text(c, left_x, height - 108, "让机器人先进入", "STHeiti", 31)
    text(c, left_x, height - 148, "危险与重复的现场", "STHeiti", 31)
    text(c, left_x, height - 179, "FIELD ROBOTICS INTEGRATION", "Helvetica-Bold", 12, RED)
    text(c, left_x, height - 196, "AUTONOMOUS NAVIGATION / PATROL / ARM + SENSOR", "Courier", 7.7, MUTED)

    body = "基于宇树 G1 / Go2-W 的自主导航、安防巡检与机械臂、现场传感器集成。已有安防场景自主导航 Demo，从一条路线、一个检查点、一次告警或数据回传闭环开始。"
    wrap_chinese(c, left_x, height - 229, body, 355, size=9.4, leading=15, color=HexColor("#C9C9C9"))

    # Available capability panel.
    panel_x = 46
    panel_y = 200
    panel_w = 390
    panel_h = 150
    c.setFillColor(PANEL)
    c.setStrokeColor(LINE)
    c.rect(panel_x, panel_y, panel_w, panel_h, stroke=1, fill=1)
    text(c, panel_x + 14, panel_y + panel_h - 22, "AVAILABLE NOW / 现有能力", "STHeiti", 9.5, RED)
    line(c, panel_x + 12, panel_y + panel_h - 32, panel_x + panel_w - 12, panel_y + panel_h - 32)

    capabilities = [
        ("01", "自主导航", "AUTONOMOUS NAVIGATION"),
        ("02", "安防场景 Demo", "SECURITY PATROL DEMO"),
        ("03", "机械臂与传感器可集成", "ARM + FIELD SENSOR INTEGRATION"),
    ]
    row_top = panel_y + panel_h - 60
    for idx, (number, zh, en) in enumerate(capabilities):
        row_y = row_top - idx * 34
        text(c, panel_x + 14, row_y, f"[ {number} ]", "Courier-Bold", 8, RED)
        text(c, panel_x + 74, row_y, zh, "STHeiti", 9.6)
        text(c, panel_x + 208, row_y, en, "Courier", 7, MUTED)
        if idx < 2:
            line(c, panel_x + 12, row_y - 12, panel_x + panel_w - 12, row_y - 12)

    # Route line linking capability to pilot.
    route_y = 174
    line(c, 72, route_y, 505, route_y, RED, 1.1)
    for point in (72, 216, 360, 505):
        c.setFillColor(BG)
        c.setStrokeColor(RED)
        c.rect(point - 4, route_y - 4, 8, 8, stroke=1, fill=1)

    # Four-step pilot.
    steps = [
        ("01", "现场目标", "FIELD OBJECTIVE"),
        ("02", "路线与检查点", "ROUTE + CHECKPOINTS"),
        ("03", "Demo / 联调", "DEMO + INTEGRATION"),
        ("04", "现场验收", "ON-SITE ACCEPTANCE"),
    ]
    step_x = 46
    step_y = 92
    step_w = 116
    for i, (number, zh, en) in enumerate(steps):
        x = step_x + i * (step_w + 8)
        c.setFillColor(PANEL)
        c.setStrokeColor(LINE)
        c.rect(x, step_y, step_w, 60, stroke=1, fill=1)
        text(c, x + 10, step_y + 40, number, "Courier-Bold", 8, RED)
        text(c, x + 10, step_y + 24, zh, "STHeiti", 8.7)
        text(c, x + 10, step_y + 10, en, "Courier", 5.9, MUTED)

    # Right image panel.
    image_x = 525
    image_y = 116
    image_w = width - image_x - 36
    image_h = height - image_y - 78
    c.setFillColor(PANEL)
    c.setStrokeColor(LINE)
    c.rect(image_x, image_y, image_w, image_h, stroke=1, fill=1)
    image_header_h = 62
    image = ImageReader(str(IMAGE))
    iw, ih = image.getSize()
    scale = min((image_w - 16) / iw, (image_h - image_header_h - 16) / ih)
    draw_w, draw_h = iw * scale, ih * scale
    c.drawImage(image, image_x + (image_w - draw_w) / 2, image_y + 8, draw_w, draw_h, mask="auto")

    # Right-side telemetry labels.
    line(c, image_x, image_y + image_h - image_header_h, image_x + image_w, image_y + image_h - image_header_h, LINE, 0.6)
    label_y = image_y + image_h - 25
    text(c, image_x + 18, label_y, "MODE", "Courier", 7, MUTED)
    text(c, image_x + 18, label_y - 17, "FIELD INTEGRATION", "Courier-Bold", 8)
    status_x = image_x + 190
    text(c, status_x, label_y, "DEMO", "Courier", 7, MUTED)
    text(c, status_x, label_y - 17, "AVAILABLE", "Courier-Bold", 8, GREEN)
    c.setFillColor(GREEN)
    c.rect(status_x + 66, label_y - 23, 7, 7, stroke=0, fill=1)

    # Contact strip.
    contact_y = 48
    line(c, 18, 78, width - 18, 78, LINE, 0.8)
    text(c, 46, contact_y + 10, "START WITH ONE ROUTE / ONE CHECKPOINT / ONE VERIFIED LOOP", "Courier-Bold", 7.4, RED)
    text(c, 46, contact_y - 5, "从一个可验证的现场结果开始", "STHeiti", 8.4)
    right_text(c, width - 36, contact_y + 11, "li.huawei@topsunpower.cc", "Courier-Bold", 10, INK)
    right_text(c, width - 36, contact_y - 5, "lihuawei-topsun.github.io/robotics-field-integration/", "Courier", 6.5, MUTED)

    # Footer truth boundary.
    disclaimer = "独立机器人集成服务，不代表宇树官方。能力以准确硬件版本、配置和现场测试为准。机器人图片为视觉示意，不是客户案例。"
    text(c, 46, 28, disclaimer, "STHeiti", 6.3, MUTED)
    right_text(c, width - 36, 28, "INDEPENDENT ROBOTICS INTEGRATION / CHINA", "Courier", 5.8, MUTED)

    c.showPage()
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
