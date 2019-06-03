<template>
    <div>
      <mdb-tbl>
        <mdb-tbl-head textWhite class="text-center">
          <tr>
            <th>用户名</th>
            <th>ID</th>
            <th>密码</th>
            <th>类型</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body class="text-center table-body">
          <tr>
            <th>LTS_user</th>
            <td>20190100</td>
            <td><input type="password" class="table-number" value="123456"></td>
            <td>
                <select class="custom-select custom-select-sm">
                    <option selected>管理员</option>
                    <option value="1">学习者</option>
                    <option value="2">教学者</option>
                </select>
            </td>
          </tr>
          
           <tr>
            <th>LTS_user</th>
            <td>20190101</td>
            <td><input type="password" class="table-number" value="123456"></td>
            <td>
                <select class="custom-select custom-select-sm">
                    <option selected>管理员</option>
                    <option value="1">学习者</option>
                    <option value="2">教学者</option>
                </select>
            </td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </div>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
export default {
    name: 'userSet',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
}
</script>

<style lang="less">
.table-body {
    color:#f8f8f8;
    .table-number {
        color: #f8f8f8;
        background: #3f3f3f;
        border: none;
    }
    .custom-select {
        color: #f8f8f8;
        width: 8rem;
        background: #3f3f3f;
    }
}
</style>
