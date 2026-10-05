const GalleryCard = {

    props: {
        image: {},
        title: {},
        description: {},
        buttonLabel: {}
    },

    template: `
        <div class="gallery-card">
            <img :src="image" :alt="title">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <button>{{ buttonLabel }}</button>
        </div>
    `
};

new Vue ({
    el: '#vue',
    components: { 'gallery-card': GalleryCard },
    data: {
    selectionCards: [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg",
        title: "Pasta",
        description: "Healthy Pasta",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg",
        title: "Red Crab",
        description: "Fresh from Alaska",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg",
        title: "Breakfast Special",
        description: "Good for the soul",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg",
        title: "Sea Shells Mix",
        description: "For the shell lovers",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg",
        title: "Ultimate Kebab",
        description: "The best from Middle East",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg",
        title: "Chicken Streak",
        description: "Grilled to perfection",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg",
        title: "Filet Mignon",
        description: "Juicy steak served with patatoes",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg",
        title: "Bistro Brunch",
        description: "A touch of Australia",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg",
        title: "California Crepe",
        description: "Stuffed with grilled shrimp",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg",
        title: "Top Burger",
        description: "The tallest hamburger from Peru",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG",
        title: "Chicken Garlic Pizza",
        description: "Our speciality",
        buttonLabel: "Add to Cart"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg",
        title: "Wok away healthy",
        description: "Healthy blend of noodles and vegies",
        buttonLabel: "Add to Cart"
    },
    ]

    }
})
