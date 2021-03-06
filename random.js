/*Pull a random recipe from TheMealDB api*/

new Vue({
  el: '#randomMeal',
  data() {
    return {
      info: { strMeal: '' },
    };
  },
  mounted() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => (this.info = response.data.meals[0]));
  },
});
