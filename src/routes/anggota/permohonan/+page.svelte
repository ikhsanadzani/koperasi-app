<script lang="ts">
    let { form } = $props();
</script>

{#if form?.success}
	<p style="color: green;">Berhasil mendaftar!</p>
{/if}

<form method="POST">
  <label>
    nama
    <input type="text" name="nama" />
  </label>
  {#if form?.errors?.nama}
    <p style="color: red;">{form.errors.nama[0]}</p>
  {/if}

  <label>
    wilayah
    <input type="text" name="wilayah" />
  </label>
  {#if form?.errors?.wilayah}
    <p style="color: red;">{form.errors.wilayah[0]}</p>
  {/if}

  <button type="submit" >Daftar</button>
</form>