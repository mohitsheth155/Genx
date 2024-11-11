import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = ({userInfo , onDelete , onEdit}) =>{

    const navigate = useNavigate()
    const handleEdit = (userInfoData) =>{
        onEdit(userInfoData)
        navigate("/")
    }

    return (
        <>
            <div>
                <h2>User Info Details</h2>
                {userInfo.length === 0 ? ( <div>No user found</div> )  : 
                    (
                        <ul>
                            {userInfo.map(
                               (userInfoData) => (
                                <>
                                <li key={userInfoData.id}>
                                <p>{userInfoData.userName }</p>
                                <p>{userInfoData.userPassword }</p>
                                <button onClick={()=> handleEdit(userInfoData)}>Edit</button>
                                <button onClick={()=> onDelete(userInfoData.id)}>Delete</button>

                                </li>
                                </>
                               ) 
                            )}
                        </ul>
                    )
                }
                <button onClick={()=>navigate("/")}>Add new User</button>
            </div>
        </>
    )

}

export default UserInfo