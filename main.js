// Descrizione:
// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

const app = new Vue({
    el: "#app",
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        musicData: "",

    },
    methods: {

    },
    mounted(){
        const fullUrl = `${this.url}`;
        //console.log(fullUrl);
        axios
            .get(fullUrl)
            .then(resp => {
                // console.log(resp)
                console.log(resp.data.response)
                this.musicData = resp.data.response


            })
            .catch(e => {
                console.error(e);
            })
    }

})
