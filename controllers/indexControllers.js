const fetch = require('node-fetch');

const index = (req, res) => {

    res.render('index')

}

const category = (req,res)=>{
    let category_id = req.params.category

    get_list(category_id)
        .then(data=>{
            res.render('channels',{
                data,
                category_id
            })
        })
        .catch(error=>console.log('ERROR: '+error))
}

const stream = (req,res)=>{
    let channel_id = req.params.channel_id
    let category_id = req.params.category_id

    console.log(channel_id,category_id)
    get_list(category_id).then(data=>{

        res.render('stream',{
            data,
            category_id,
            channel_id
        })
    })
}


async function get_list(category_id) {

    let url = "https://gabrieljgb.github.io/data/file_" + category_id + ".json"
    const response = await fetch(url)
    const parsed = await response.json()
    return parsed
}


module.exports = {
    index,
    category,
    stream
};