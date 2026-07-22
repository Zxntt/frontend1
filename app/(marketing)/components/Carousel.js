export default function Carousel() {
  return (
    <div
      className="container mt-5"
      style={{
        background: "#1e293b",
        borderRadius: "20px",
        padding: "60px",
        color: "white",
      }}
    >
      <div className="row align-items-center">

        <div className="col-md-6">
          <h1 className="display-4 fw-bold">
            Smart Door Bell
          </h1>

          <p className="lead mt-3">
            ระบบกริ่งอัจฉริยะด้วย ESP32-CAM
          </p>

          <ul className="mt-4">
            <li>📷 ถ่ายรูปเมื่อกดกริ่ง</li>
            <li>🚶 ตรวจจับการเคลื่อนไหวด้วย PIR</li>
            <li>🌐 แสดงข้อมูลผ่านเว็บไซต์</li>
            <li>💾 บันทึกข้อมูลลงฐานข้อมูล</li>
          </ul>

          <button className="btn btn-primary mt-3">
            View Dashboard
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/images/doorbell.png"
            className="img-fluid"
            alt="Smart Door Bell"
          />
        </div>

      </div>
    </div>
  );
}