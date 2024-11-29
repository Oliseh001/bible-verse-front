Vue.createApp({
  data() {
    return {
      msg: 'Random Bible Verse or Quote Generator',
      randomQuote: '', // Holds the fetched quote
      randomBibleVerse: '', // Holds the fetched Bible verse
    };
  },
  methods: {
    /**
     * method to fetch data from a specified API endpoint
     * @param {string} endpoint - The API endpoint to fetch data from
     * @returns {Promise<string>} - The response text or an error message
     */
    async fetchData(endpoint) {
      try {
        // Make a fetch request to the specified endpoint
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Failed to fetch from ${endpoint}`);
        return await response.text(); // Return the response text
      } catch (error) {
        console.error(`Error fetching from ${endpoint}:`, error);
        return "Could not fetch data at this time."; // Return fallback error message
      }
    },

    /**
     * Fetch a random Bible verse using the generic fetchData method
     */
    async getRandomBibleVerse() {
      this.randomBibleVerse = await this.fetchData(
        "https://bible-verse-4nps.onrender.com/bible-verse/verse" // Bible verse API endpoint
      );
    },

    /**
     * Fetch a random quote using the generic fetchData method
     */
    async getRandomQuote() {
      this.randomQuote = await this.fetchData(
        "https://bible-verse-4nps.onrender.com/bible-verse/quote" // Quote API endpoint
      );
    },
  },
}).mount("#app");
