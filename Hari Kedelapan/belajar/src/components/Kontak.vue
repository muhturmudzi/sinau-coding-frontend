<template>
  <div class="container-fluid">
    <div class="overlay">
      <div class="container">
        <form action="" class="form-reg">
          <h4 class="mb3">Registrasi</h4>
          <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" id="nama" placeholder="Nama Lengkap" class="form-control mb3">
          </div>
          <div class="form-group">
            <label for="email">Alamat Email</label>
            <input type="email" id="email" placeholder="name@example.com" class="form-control mb3">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Alamat</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
              placeholder="Masukan alamat tinggal"></textarea>
          </div>
          <div class="form-group">
            <label for="">Pendidikan</label>
            <select class="form-control">
              <option value="" disabled selected>Pilih Pendidikan Terakhir</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="Prof">Prof</option>
            </select>
          </div>

          <label for="">Jenis Kelamin</label>
          <div class="form-group">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                checked>
              <label class="form-check-label" for="exampleRadios1">
                Laki-laki </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
              <label class="form-check-label" for="exampleRadios2">
                Perempuan </label>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label for="">Password</label>
              <input type="password" placeholder="password" class="form-control mb4">
            </div>
            <div class="col">
              <label for="">Confirm Password</label>
              <input type="password" placeholder="confirm password" class="form-control mb4">
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Saya telah membaca dan menyetujui rules yg berlaku </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Daftar</button>
        </form>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "HelloWorld"
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid {
    background: url(/images/5.jpg) no-repeat;
    min-width: 100vh;
    background-size: cover;

  }

  .container {
    /* filter: drop-shadow(50%); */
    /* background-color: burlywood; */
    /* filter: blur(1px); */
    /* color: white; */
    /* margin-top: 10px; */
    padding-top: 30px;
    /* box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important; */
  }

  .form-reg {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
    padding: 20px;
    color: white;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    margin-left: -15px;
    margin-right: -15px;
  }
</style>