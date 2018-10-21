const mutations = {
    // createDog(parent, args, ctx, info){
    //     global.dogs = global.dogs || []; //initiate global variable "dogs"
    //     // create a dog
    //     const newDog = { name: args.name }; 
    //     global.dogs.push(newDog); //store "dogs" into global variable
    //     return newDog;
    //     //console.log(args);
        
    // }

    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        
        return item;
    }
};

module.exports = mutations;
