<template>
    <div>
        <Carousel />
        <h2 class="heading">Latest Articles</h2>
        <b-container>
            <b-row>
                <b-col xs="12" sm="6" lg="3" class="p-2" align="center">
                    <div>
                    <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                        align="left"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card> 
                    </div>
                </b-col>
                <b-col xs="12" sm="6" lg="3"  class="p-2" align="center">
                     <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                        align="left"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card> 
                </b-col>
                <b-col xs="12" sm="6" lg="3"  class="p-2" align="center">
                     <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                        align="left"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="dark">Go somewhere</b-button>
                    </b-card> 
                </b-col>
                <b-col xs="12" sm="6" lg="3"  class="p-2" align="center">
                     <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                        align="left"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card> 
                </b-col>
            </b-row>
            </b-container>

    </div>
</template>

<script>
import Carousel from './carousel'

export default {
    name: 'Home',
    components: {
        Carousel,
    }
}
</script>

<style scoped>
    .heading {
        font-family: Helvetica, sans-serif;
        font-weight: bold;
        margin: 30px 0px 10px 20px;
        text-align: center;
    }
    .column {

    }
    
   

</style>

