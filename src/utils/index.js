import { 
    calendar,
    gender,
    age,
    mail,
    nat,
    phone,
    adress
} from "../assets";

export const getFullDate = ( date ) => {
    return date.slice(0, 10)
}

const ignoreFields = ["login", "picture", "name", "id", "coordinates", "timezone"];

const parseObject = ( dataForParse ) => {
    let result = [];
    for( let key in dataForParse ){
        if( typeof dataForParse[key] !== "object" ){
            result.push( { fieldName: key, value: dataForParse[key] } );
        }
        else if( !ignoreFields.find( field => field === key ) ){
            let parsedData = parseObject( dataForParse[key] );
            result = result.concat(parsedData);
        }
    }
    return result
}

export const getPersonInfo = ( personData ) => {
    const parsePersonData = parseObject(personData);
    const additionArray = [
        {
            fieldName: "Gender",
            icon: gender
        },

        {
            fieldName: "Stree number",
            icon: adress
        },

        {
            fieldName: "Street Name",
            icon: adress
        },

        {
            fieldName: "City",
            icon: adress
        },

        {
            fieldName: "State",
            icon: adress
        },

        {
            fieldName: "Country",
            icon: adress
        },

        {
            fieldName: "Postcode",
            icon: mail
        },

        {
            fieldName: "Email",
            icon: mail
        },

        {
            fieldName: "Birthday",
            icon: calendar
        },

        {
            fieldName: "Age",
            icon: age
        },

        {
            fieldName: "Date of Registration",
            icon: calendar
        },

        {
            fieldName: "Account Age",
            icon: age
        },

        {
            fieldName: "Phone",
            icon: phone
        },

        {
            fieldName: "Cell",
            icon: phone
        },

        {
            fieldName: "NAT",
            icon: nat
        },
    ];
    const result = parsePersonData.map( (item, index) => {
        if( item.fieldName === "date"){
            return {
                fieldName: additionArray[index].fieldName,
                icon: additionArray[index].icon,
                value: item.value.slice(0, 10)
            }
        }
        else{
            return {
                fieldName: additionArray[index].fieldName,
                icon: additionArray[index].icon,
                value: item.value
            }
        }
    } )
    return result
}