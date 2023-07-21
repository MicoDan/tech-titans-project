class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString
    }
    filter() {
        const queryObj = { ...this.queryString }

        //the spread operators ... are responsible to take out all the field out of the object

        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el])



        // advanced filtering


        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|lte|lt|gt)\b/g, match => `$${match}`)
        // $${match}`` is executed, which adds a dollar sign ('$') before the matched word. This transforms the words into valid MongoDB comparison operators.
        console.log(JSON.parse(queryStr));

        // \b is used to  match the parsed words correctly




        // const query = Tour.find(queryObj)
        // query = Tour.find(JSON.parse(queryStr));

        this.query.find(JSON.parse(queryStr))
        return this;

    }
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort("-createAt")
        }
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ')
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select("-__v");
        }
        return this;
    }
    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}
module.exports = APIFeatures
