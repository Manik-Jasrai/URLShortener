// nanoid-wrapper.js

const getModule = async (name) => {
    const module = await import(name);
    return module
};

module.exports = getModule;
