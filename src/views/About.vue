<template>
  <div class="about">
    <!-- 8. Display the data with a structured table in following columns, -->
    <!--  element-ui is ready for use -->
    <!-- property.name | property.location.country | property.reviews.summary.score -->
    <!-- 9. Do a simple pagination of 5 per page-->
    <!-- 10. Hide the entry without country and/or score-->
    <el-container>
      <el-header class="head"> <h1 class="title">Hotels</h1> </el-header>
      <el-main class="main">
        <div v-for="hotel in hotels" v-bind:key="hotel.id">
          <h2 class="name">{{ hotel.name }}</h2>
          <el-row :gutter="20">
            <el-col :span="8"><div class="col"> Address: {{ hotel.location.address }}</div></el-col>
            <el-col :span="4"> <div class="col"> Score: {{ hotel.score }} </div></el-col>
          </el-row>
        </div>

      <el-button-group class="buttons">
      <el-button @click="prevPage" type="warning" :icon="ArrowLeft" plain>Previous Page</el-button>
      <el-button @click="nextPage" type="warning" plain>Next Page<el-icon class="el-icon--right">
        <ArrowRight />
      </el-icon>
      </el-button>
    </el-button-group>

      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>

</template>

<script>
// import { ref, onMounted } from 'vue';
import axios from 'axios';

import 'element-plus/theme-chalk/display.css';

export default {
  data() {
    return {
      hotels: [],
      page: 1,
    };
  },
  methods: {
    nextPage() {
      this.page += 1;
      axios.get(`http://localhost:3000/api/fromSource/?page=${this.page}`)
        .then((res) => {
          this.hotels = res.data.map((hotel) => hotel);
        });
    },
    prevPage() {
      this.page -= 1;
      axios.get(`http://localhost:3000/api/fromSource/?page=${this.page}`)
        .then((res) => {
          this.hotels = res.data.map((hotel) => hotel);
        });
    },
  },
  mounted() {
    axios.get('http://localhost:3000/api/fromSource/?page=1')
      .then((res) => {
        // console.log(res.data);
        this.hotels = res.data.map((hotel) => hotel);
      });
  },
};

</script>

<style>

.about {
  background-color: #18222c;
}

.title {
  color: #ebe9e0;
  font-size: 30px;
}

.head {
  background-color: #18222c;
  border-radius: 5px;
  border-color: #fcfdff;
  padding: 0px 30px;
}

.name {
  color: #a6a9ad;
}

.col {
  height: 3rem;
  background-color: #4c3514;
  border-radius: 5px;
  color: #a6a9ad;
  padding: 10px 5px 5px 5px;
}

.main {
  background-color: #18222c;
  border-radius: 5px;
}

.buttons {
  padding: 10px;
}
</style>
