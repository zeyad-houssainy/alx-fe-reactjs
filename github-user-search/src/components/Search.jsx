import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setLoading(true);
            setError(null);

            fetchUserData(searchTerm)
                .then(data => {
                    setUserData(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError("Looks like we cant find the user");
                    setUserData(null);
                    setLoading(false);
                });
        }
    }

    const inputStyling = {
                width: "300px", 
                height: "50px",
                textAlign: "center",
                alignSelf: "center",
                fontFamily: "sans-serif", 
                fontSize: "22px"
            }

    return(
        <>
            {/* Input form */}
            <form onSubmit={handleSubmit}>
                <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Enter GitHub username..."
                        style={inputStyling}
                    />
                    <button type="submit" style={{height: "50px", fontSize: "18px"}}>
                        Search
                    </button>
                </div>
            </form>
            
            {loading && <h2>Loading...</h2>}
            {error && <h2 style={{color: "red"}}>{error}</h2>}
            {userData && (
                <div>
                    <h2>Search Result:</h2>
                    <img 
                        src={userData.avatar_url} 
                        alt={`${userData.login}'s avatar`}
                        style={{
                            width: "100px", 
                            height: "100px", 
                            borderRadius: "50%", 
                            marginBottom: "10px"
                        }}
                    />
                    <p><strong>Username:</strong> {userData.login}</p>
                    <p><strong>Name:</strong> {userData.name || "Not provided"}</p>
                    <p><strong>Public Repos:</strong> {userData.public_repos}</p>
                    <p><strong>Followers:</strong> {userData.followers}</p>
                    
                </div>
            )}
        </>
    )
}

export default Search