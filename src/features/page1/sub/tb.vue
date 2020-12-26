<template>
  <el-table
    :data="dataSource"
    style="width:100%"
    :class="isEdit ? 'table-edit' : 'table-no-edit'"
    :row-key="getRowKeys"
    :expand-row-keys="expandedRows"
    :cell-class-name="cellClassName"
    highlight-current-row
    @expand-chang="expandChange"
  >
    <slot name="column">
    </slot>
    <slot name="op">
    </slot>
  </el-table>
</template>

<script>

export default {
  name: 'Tb',
  props: {
    cellClassName: Function,
    dataSource: Array,
    isEdit: Boolean,
    idName: String,
    isHiddenOP: Boolean,
  },
  data() {
    return {
      expandedRows: [],
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getRowKeys(row) {
      return row.id || row[idName];
    },
    expandChange(row, expandedRows) {
      const that = this;
      if(expandedRows.length) {
        that.expandedRows = [];
        if(row) {
          that.expandedRows.push(row.id || row[idName]);
        }
      } else {
        that.expandedRows = [];
      }
    }
  }
};
</script>

<style scoped>
 .table-edit .el-input {
   display: block;
 }
 .table-edit .el-input + span {
   display: none;
 }
 .table-no-edit .el-input {
   display: none;
 }
 .table-no-edit .el-input + span {
   display: none;
 }
</style>
