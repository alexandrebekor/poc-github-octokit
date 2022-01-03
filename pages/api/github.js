import { Octokit } from "octokit"

const getRepos = async (req, res) => {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
    const response = await octokit.request("GET /user/repos")

    res.send(response.data)
}

export default getRepos