const getInfo = async (req, res) => {
    const response = await fetch('https://api.github.com/user/repos', {
        method: "GET",
        headers: {
            "Authorization": `token ${process.env.GITHUB_TOKEN}`
        }
    })
    const data = await response.json()
    res.send(data)
}

export default getInfo