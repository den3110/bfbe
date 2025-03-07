export default function numberWithCommas(x) {
    if(x !== undefined) {
        if(typeof x=== "number") {
            return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        else {
            return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    else {
        return 0;
    }
}