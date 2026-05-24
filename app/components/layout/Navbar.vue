<template>
    <nav class="navbar">
        <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="/" alt="Logo">
        </a>
        </div>
    
        <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="/">Home</a>
            <a class="navbar-item" href="/about">About</a>
            <a class="navbar-item" href="/contact">Contact</a>
        </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}
.navbar-item {
    color: #fff;
    margin-right: 1rem;
    text-decoration: none;
}
.navbar-item:hover {
    text-decoration: underline;
}
</style>