const serialize = (value)=> JSON.stringify(value)

const deserialize = (value)=> JSON.parse(value)

export default  
{
    serialize,
    deserialize
}