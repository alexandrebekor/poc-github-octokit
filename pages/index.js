import React from "react"

const Index = ({ repositories }) => {
    return (
        <>
            <section>
                <h2>Hello World</h2>
                <p>{repositories.map(repository => {
                    return (
                        <div key={repository.id}>
                            <h2>{repository.name}</h2>
                            <p>{repository.category}</p>
                            <p>{repository.language}</p>
                            <p>{repository.description}</p>
                            <div>
                                {repository.topics.map(topic => {
                                    return (
                                        <span key={topic}>{topic}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}</p>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch('http://localhost:3000/api/github')
    const data = await response.json()

    const formatRepository = repo => ({
        id: repo.id,
        category: repo.name.split("-")[0].toUpperCase(),
        name: repo.name.split("-").splice(1).join(' ').toUpperCase(),
        language: repo.language,
        topics: repo.topics,
        description: repo.description
    })

    const repositories = data.map(formatRepository)

    return {
        props: {
            repositories
        }
    }
}

export default Index