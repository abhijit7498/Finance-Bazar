import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

// Submit form data and store user ID in localStorage
export const userData = async (formData) => {
    try {
        const res = await axios.post(`${URL}/form`, formData);

        console.log("Form submitted successfully!", res.data);

        const token = res.data.token;

        if (token) {
            localStorage.setItem("token", token);
        } else {
            console.warn("No token received.");
        }

    } catch (err) {
        console.error("Error submitting form:", err.response?.data || err.message);
    }
};

// Fetch user data using x-user-id header
export const getUserData = async (setUser) => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            console.warn("No token found in localStorage.");
            return;
        }

        const res = await axios.get(`${URL}/form`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("Fetched user data:", res.data);
        setUser(res.data);

    } catch (err) {
        console.error("Error fetching form data:", err.response?.data || err.message);
    }
};

export const updateUserData = async (updatedFields) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.put(`${URL}/form`, updatedFields, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("User updated:", res.data);
        return res.data;

    } catch (err) {
        console.error("Error updating user data:", err.response?.data || err.message);
    }
};

