"use client";

export default function Card() {
  return (
    <div className="container py-5">

      <div className="row g-4">

        {/* Latest Image */}
        <div className="col-lg-6">
          <div className="card bg-dark text-white shadow h-100">
            <div className="card-header">
              📷 Latest Image
            </div>

            <img
              src="/images/doorbell.png"
              className="card-img-top"
              alt="Latest"
            />

            <div className="card-body">
              <p>Latest Capture</p>
              <small>22 July 2026 14:20</small>
            </div>
          </div>
        </div>

        {/* Device Status */}
        <div className="col-lg-6">

          <div className="row g-3">

            <div className="col-6">
              <div className="card text-center bg-success text-white shadow">
                <div className="card-body">
                  <h3>12</h3>
                  <p>Door Bell Today</p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card text-center bg-primary text-white shadow">
                <div className="card-body">
                  <h3>25</h3>
                  <p>Motion Today</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  <h5>🟢 Device Status</h5>

                  <p>ESP32-CAM Online</p>

                  <p>Last Update : 14:20</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="card mt-5 shadow">

        <div className="card-header">
          Recent Activity
        </div>

        <table className="table mb-0">

          <thead>

            <tr>

              <th>Time</th>

              <th>Event</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>14:20</td>

              <td>Door Bell</td>

              <td>Success</td>

            </tr>

            <tr>

              <td>14:12</td>

              <td>Motion Detection</td>

              <td>Success</td>

            </tr>

            <tr>

              <td>13:58</td>

              <td>Door Bell</td>

              <td>Success</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}