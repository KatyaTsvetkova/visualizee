export const userQuery = (userId) => {
    const query = `*[_type =="user" && _id =='${userId}']`;
    return query;
}

export const searchQuery = (searachTerm) => {
    const query = `*[_type== "pin"&& titel match '${searachTerm}*'|| category match '${searachTerm}*' || about match '${searachTerm}*']{
       image{
        asset -> {
            url
        }
       } ,
       _id,
       destination,
       postedBy ->{
        _id,
        userName,
        image
       },
       save[]{
        _key,
        postedBy->{
            _id,
            userName,
            image
        },
       },
    }`
    return query;
}
export const feedQuery = `*[_type =='pin'] | order(_createAt desc){
    image{
        asset -> {
            url
        }
       } ,
       _id,
       destination,
       postedBy ->{
        _id,
        userName,
        image
       },
       save[]{
        _key,
        postedBy->{
            _id,
            userName,
            image
        },
       }, 
}`

