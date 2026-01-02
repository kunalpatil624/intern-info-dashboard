import { useState } from "react";
import { useNavigate } from "react-router-dom";

const statusStyles = {
  Active: "bg-green-500 text-black",
  Hold: "bg-yellow-400 text-black",
  Terminate: "bg-red-500 text-white",
  Completed: "bg-blue-500 text-white",
};

const InternDashboard = () => {
  const navigate = useNavigate();

  const [interns, setInterns] = useState([
    {
      id: "INT001",
      name: "Rahul Sharma",
      role: "MERN Stack Intern",
      profile: "Full Stack Developer",
      startDate: "01-12-2025",
      endDate: "01-03-2026",
      status: "Active",
    },
    {
      id: "INT002",
      name: "Priya Verma",
      role: "UI/UX Intern",
      profile: "Designer",
      startDate: "15-12-2025",
      endDate: "15-03-2026",
      status: "Completed",
    },
  ]);

  // 🔁 Change Status
  const changeStatus = (index, newStatus) => {
    const updated = [...interns];
    updated[index].status = newStatus;
    setInterns(updated);
  };

  // 📄 Download Certificate
  const downloadCertificate = (intern) => {
    alert(`Downloading certificate for ${intern.name}`);
  };

  return (
    <div className="min-h-screen bg-[#0f1020] text-white px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#c7d2fe]">
          Intern Dashboard
        </h1>

        <button
          onClick={() => navigate("/add-intern")}
          className="bg-[#818cf8] text-black px-5 py-2 rounded font-semibold hover:bg-[#6366f1]"
        >
          + Add Intern
        </button>
      </div>

      <div className="overflow-x-auto bg-[#171833] border border-[#2b2d63] rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#1f2045] text-[#c7d2fe]">
            <tr>
              <th className="p-4">Register ID</th>
              <th className="p-4">Intern Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Profile</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {interns.map((intern, index) => (
              <tr
                key={index}
                className="border-t border-[#2b2d63] hover:bg-[#1a1b3a]"
              >
                <td className="p-4">{intern.id}</td>
                <td className="p-4">{intern.name}</td>
                <td className="p-4">{intern.role}</td>
                <td className="p-4">{intern.profile}</td>
                <td className="p-4">{intern.startDate}</td>
                <td className="p-4">{intern.endDate}</td>

                {/* Status Dropdown */}
                <td className="p-4">
                  <select
                    value={intern.status}
                    onChange={(e) =>
                      changeStatus(index, e.target.value)
                    }
                    className={`px-3 py-1 rounded text-xs font-semibold outline-none ${statusStyles[intern.status]}`}
                  >
                    <option value="Active">Active</option>
                    <option value="Hold">Hold</option>
                    <option value="Terminate">Terminate</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>

                {/* Actions */}
                <td className="p-4">
                  {intern.status === "Completed" && (
                    <button
                      onClick={() => downloadCertificate(intern)}
                      className="bg-[#38bdf8] text-black px-3 py-1 rounded text-xs font-semibold hover:bg-[#0ea5e9]"
                    >
                      Download Certificate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternDashboard;
