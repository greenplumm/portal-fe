<template>
  <div class="content">
     <Tb
      :data-source="dataSource"
     >
       <el-table-column label="title" props="title">
            <template slot-scope="scope">
              <span>{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column label="url" props="url">
            <template slot-scope="scope">
              <span>{{scope.row.url}}</span>
            </template>
        </el-table-column>
     </Tb>
  </div>
</template>

<script>
import Tb from './sub/tb';

export default {
  components: {
    Tb
  },
  data() {
    return {
      dataSource: [],
    };
  },
  created() {
    this.dataSource = [{
      id: 'id1',
      title: 't1',
      url: 'xxxxx'
    },{
      id: 'id2',
      title: 't2',
      url: 'xxxxxx2'
    }];

  },
  mounted() {
  },
  methods: {

  }
};
</script>

<style scoped>
</style>
