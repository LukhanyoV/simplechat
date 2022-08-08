module.exports = () => {
    const messages = []
    return {
        getMessages: () => messages,
        addMessages: message => messages.push(message)
    }
}