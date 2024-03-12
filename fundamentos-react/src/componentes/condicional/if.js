const IF = props => {
    const elseChild = props.children.filter(child=>{
        return child.type && child.type.name==="ELSE";
    })[0];
    const ifChild = props.children.filter(child=>{
        return child!==elseChild;
    });
    if(props.test){
        return ifChild;
    }
    return elseChild;
}
export default IF;

export const ELSE = props =>  {
    return props.children;
}