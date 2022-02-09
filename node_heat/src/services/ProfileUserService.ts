import prismaClient from "../prisma";

class ProfileUserService {
    async execute(user_id: string) {
       const user = await prismaClient.user.findFirst({
           where:{
               id: user_id
           }
       })

       return user;
    }

    //SELECT * FROM USER WHERE ID = USER_ID
}

export { ProfileUserService }