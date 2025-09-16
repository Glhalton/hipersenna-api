// import { auth } from "../../lib/auth";

// interface userSignUp {
//     name: string;
//     email: string;
//     username: string;
//     password: string;
//     branch_id: number;
//     access_level: number;
// }

// export async function signUpUser({userSignUp}: {userSignUp: userSignUp | unknown}) {
//     const { email, name, password, username, branch_id, access_level } = userSignUp as {
//         email: string,
//         name: string,
//         password: string,
//         username: string,
//         branch_id: number,
//         access_level: number,
//     }

//     const data = await auth.api.signUpEmail({
//         body: {
//             email,
//             name,
//             password,
//             username,
//             branch_id,
//             access_level,
//             displayUsername: username,
//         }
//     })

//     return data;
// }