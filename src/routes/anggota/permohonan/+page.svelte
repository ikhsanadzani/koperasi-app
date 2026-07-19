<script lang="ts">
    let { form } = $props();
</script>

{#if form?.success}
	<p style="color: green;">Berhasil mendaftar!</p>
{/if}

<form method="POST">
  <label>
     Nama
        <input name="nama" type="text" required />
  </label>
  
  <label>
    Wilayah
        <input type="text" name="wilayah" required />
  </label>

  <button type="submit">Daftar</button>
</form>