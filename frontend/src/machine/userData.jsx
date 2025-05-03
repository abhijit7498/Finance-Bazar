import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

// Submit form data and store user ID in localStorage
export const userData = async (formData) => {
    try {
        const res = await axios.post(`${URL}/form`, formData);

        console.log("Form submitted successfully!", res.data);

        // Correctly extract MongoDB _id returned as "id"
        const userId = res.data.id;

        if (userId) {
            const token = JSON.stringify({ userId });
            localStorage.setItem("token", token);
        } else {
            console.warn("No userId found in response:", res.data);
        }

    } catch (err) {
        console.error("Error submitting form:", err.response?.data || err.message);
    }
};

// Fetch user data using x-user-id header
// export const getUserData = async (setUser) => {
//     try {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             console.warn("No token found in localStorage.");
//             return;
//         }

//         const { userId } = JSON.parse(token);

//         const res = await axios.get(`${URL}/form`, {
//             headers: {
//                 "x-user-id": userId
//             }
//         });

//         setUser(res.data);

//     } catch (err) {
//         console.error("Error fetching form data:", err.response?.data || err.message);
//         return [];
//     }
// };


// Fetch user data using x-user-id header
export const getUserData = async (setUser) => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            console.warn("No token found in localStorage.");
            return;
        }

        const { userId } = JSON.parse(token); // Extract userId from token

        // Debugging: Check if userId exists
        if (!userId) {
            console.warn("No userId found in token.");
            return;
        }

        const res = await axios.get(`${URL}/form`, {
            headers: {
                "x-user-id": userId // Send userId in the header
            }
        });

        // Debugging: Check if response contains user data
        console.log("Fetched user data:", res.data);

        // Assuming the database returns user data in the structure you've provided
        if (res.data && res.data._id) {
            // You can check if the _id matches the userId from the token
            if (res.data._id === userId) {
                console.log("User data matches.");
                setUser(res.data);  // Set the user data
            } else {
                console.warn("User ID mismatch between token and fetched data.");
            }
        } else {
            console.warn("No user data found.");
        }

    } catch (err) {
        console.error("Error fetching form data:", err.response?.data || err.message);
        return [];
    }
};
