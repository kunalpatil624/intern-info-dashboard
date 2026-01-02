import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddIntern = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    registerId: "",
    role: "",
    profile: "",
    startDate: "",
    endDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Intern added successfully ✅");
    navigate("/intern-dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0f1020] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-[#171833] border border-[#2b2d63] rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-[#c7d2fe] mb-6 text-center">
          Add Intern Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Intern Name"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
          />

          <input
            name="registerId"
            placeholder="Register ID"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
          />

          <input
            name="role"
            placeholder="Role (MERN, UI/UX, HR...)"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
          />

          <input
            name="profile"
            placeholder="Profile"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              onChange={handleChange}
              className="p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
            />

            <input
              type="date"
              name="endDate"
              onChange={handleChange}
              className="p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
            />
          </div>

          <select
            name="status"
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#0f1020] border border-[#3b3f8c]"
          >
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>

          <button className="w-full bg-[#818cf8] text-black py-3 rounded font-semibold hover:bg-[#6366f1]">
            Save Intern
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIntern;
