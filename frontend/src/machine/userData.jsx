import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

export const userData = async ({ formData }) => {
    try {
        const res = await axios.post(`${URL}/form`, formData);
        console.log(res.data);
        alert("Form submitted successfully!");
    } catch (err) {
        console.error("Error submitting form:", err);
        alert("Failed to submit form.");
    }
}