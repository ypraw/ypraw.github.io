---
title: Power Management Linux
author: "Yunindyo Prabowo"
category:   "linux"
---

Halo semua, dalam kesempatan kali ini saya akan menuliskan artikel berseri mengenai hal-hal yang saya lakukan setelah menginstall linux. Dalam artikel ini beberapa pengaturan seputar kernel dapat berbeda dengan perangkat yang saya gunakan dan perangkat yang pembaca gunakan. Namun secara umum beberapa konfigurasi yang saya gunakan bisa di terapkan oleh para pembaca.

Berikut ini merupakan spesifikasi yang saya gunakan sebagai perangkat harian saya.
 
# Details Spesifications

>| Info | Value |
>| :--- | :---- |
>| OS  | Manjaro |
>| Desktop Environtment | KDE Plasma |
>| Device Host  | Lenovo Ideapad 110-14isk |
>| Processor | Intel i3-6100u @2.30Ghz|
>| GPU I | Intel HD 520|
>| GPU II  | Radeon R5 M430|
>| Disk Storage I | SSD 128 GB | 
>| Disk Storage II | HDD 1TB |


## Bagian Pertama {Cari mirror tercepat}

Sebelum memulai merubah tampilan yang biasanya saya gunakan, saya perlu mengupdate semua package yang saya gunakan dan mencari mirror server terdekat, biasanya untuk mirror server ini selain menggunakan yang ada di Indonesia seperti Datautama saya menggunakan mirror server singapore, umumnya distribusi terkenal banyak yang sudah di mirrorkan ke server singapore ini. Dan nilai tambahnya adalah hampir semua provider Internet lokal memiliki full akses speed ke repository Singapore ini. Oleh karena itu saya menyarankan menggunakan repository Singapore ini sebagai main repo saya, kekurangannya terkadang repo-repo mirror ini menggunakan metode partial update sehingga kesan bleeding edge atau up-to-date terhadap upstream agak tertinggal, dikarenakan saya menggunakan manjaro, maka saya menggunakan sintaks berikut untuk mengeset repository mirror yg saya gunakan, yaitu Indonesia dan Singapore : 

```bash
sudo pacman-mirrors -c Indonesia,Singapore
```

namun beberapa rekomendasi lain bisa menggunakan searching fastest server,

```bash 
sudo pacman-mirrors -f 10
```

script ini akan mencari 10 server tercepat dan terupdate, jika repo lokal seperti Singapore atau Indonesia memiliki speed akses paling cepat namun masih tertinggal versi update nya terhadap server lain maka yang dipilih tetap yang paling terupdate walaupun lebih lambat. Dan bagi pengguna distribusi selain manjaro dapat menyesuaikan syntax diatas dengan membaca dokumentasi resmi tentunya XD.

## Bagian Kedua {Power Management}
Dibagian ini saya akan menjelaskan beberapa langkah untuk menghemat battery, cara ini mungkin tidak 100% berhasil di semua perangkat.
> __**cara ini butuh perhatian khusus dan baca dengan teliti, kesalahan yang terjadi akibat pembaca tidak teliti dengan langkah-langkah yang diberikan**__.

### Install Kernel Terbaru.
Biasanya setelah melakukan update, kernel akan diperbaharui. Untuk distribusi tertentu mungkin butuh instalasi secara manual. Untuk Distribusi manjaro dapat memanfaatkan fitur _mhwd_

untuk kernel berlabel LTS:
```bash
sudo mhwd-kernel -i linux414
```
atau 

``` bash
sudo mhwd-kernel -i linux419
```

Langkah ini bergantung pada distribusi apa yang anda gunakan, umumnya kernel LTS menjadi pilihan untuk distribusi-distribusi yang mementingkan kestabilan.

### Install Microcode CPU
Biasanya secara otomatis OS akan mendeteksi cpu yang digunakan oleh pengguna. Baik yang menggunakan AMD ataupun Intel. Jika belum yakin pastikan pada software manager anda bahwa package microcode sudah terinstall dengan baik. Cara ini dilakukan agar hardware yang anda gunakan dapat didukung dengan baik oleh kernel. 

### Kernel Parameter
> **_Cara ini bukan untuk pengguna awam, jika anda merasa awam baca dengan teliti semua referensi yang saya berikan di bawah dan pastikan kembali spesifikasi hardware yang anda gunakan sama dengan paramter yang anda gunakan_**

cek parameter apa saja yang dapat di include kan pada configurasi grub anda, sebagai contoh untuk modul i915 yaitu untuk pengguna intel dan integrated graphic intel.

```bash
 modinfo i915 | grep '^parm' 
parm:           modeset:Use kernel modesetting [KMS] (0=disable, 1=on, -1=force vga console preference [default]) (int)
parm:           enable_dc:Enable power-saving display C-states. (-1=auto [default]; 0=disable; 1=up to DC5; 2=up to DC6) (int)
parm:           enable_fbc:Enable frame buffer compression for power savings (default: -1 (use per-chip default)) (int)
parm:           lvds_channel_mode:Specify LVDS channel mode (0=probe BIOS [default], 1=single-channel, 2=dual-channel) (int)
parm:           panel_use_ssc:Use Spread Spectrum Clock with panels [LVDS/eDP] (default: auto from VBT) (int)
parm:           vbt_sdvo_panel_type:Override/Ignore selection of SDVO panel mode in the VBT (-2=ignore, -1=auto [default], index in VBT BIOS table) (int)
parm:           reset:Attempt GPU resets (0=disabled, 1=full gpu reset, 2=engine reset [default]) (int)
parm:           vbt_firmware:Load VBT from specified file under /lib/firmware (charp)
parm:           error_capture:Record the GPU state following a hang. This information in /sys/class/drm/card<N>/error is vital for triaging and debugging hangs. (bool)
parm:           enable_hangcheck:Periodically check GPU activity for detecting hangs. WARNING: Disabling this can cause system wide hangs. (default: true) (bool)
parm:           enable_ppgtt:Override PPGTT usage. (-1=auto [default], 0=disabled, 1=aliasing, 2=full, 3=full with extended address space) (int)
parm:           enable_psr:Enable PSR (0=disabled, 1=enabled) Default: -1 (use per-chip default) (int)
parm:           alpha_support:Enable alpha quality driver support for latest hardware. See also CONFIG_DRM_I915_ALPHA_SUPPORT. (bool)
parm:           disable_power_well:Disable display power wells when possible (-1=auto [default], 0=power wells always on, 1=power wells disabled when possible) (int)
parm:           enable_ips:Enable IPS (default: true) (int)
parm:           fastboot:Try to skip unnecessary mode sets at boot time (default: false) (bool)
parm:           prefault_disable:Disable page prefaulting for pread/pwrite/reloc (default:false). For developers only. (bool)
parm:           load_detect_test:Force-enable the VGA load detect code for testing (default:false). For developers only. (bool)
parm:           force_reset_modeset_test:Force a modeset during gpu reset for testing (default:false). For developers only. (bool)
parm:           invert_brightness:Invert backlight brightness (-1 force normal, 0 machine defaults, 1 force inversion), please report PCI device ID, subsystem vendor and subsystem device ID to dri-devel@lists.freedesktop.org, if your machine needs it. It will then be included in an upcoming module version. (int)
parm:           disable_display:Disable display (default: false) (bool)
parm:           mmio_debug:Enable the MMIO debug code for the first N failures (default: off). This may negatively affect performance. (int)
parm:           verbose_state_checks:Enable verbose logs (ie. WARN_ON()) in case of unexpected hw state conditions. (bool)
parm:           nuclear_pageflip:Force enable atomic functionality on platforms that don't have full support yet. (bool)
parm:           edp_vswing:Ignore/Override vswing pre-emph table selection from VBT (0=use value from vbt [default], 1=low power swing(200mV),2=default swing(400mV)) (int)
parm:           enable_guc:Enable GuC load for GuC submission and/or HuC load. Required functionality can be selected using bitmask values. (-1=auto, 0=disable [default], 1=GuC submission, 2=HuC load) (int)
parm:           guc_log_level:GuC firmware logging level. Requires GuC to be loaded. (-1=auto [default], 0=disable, 1..4=enable with verbosity min..max) (int)
parm:           guc_firmware_path:GuC firmware path to use instead of the default one (charp)
parm:           huc_firmware_path:HuC firmware path to use instead of the default one (charp)
parm:           dmc_firmware_path:DMC firmware path to use instead of the default one (charp)
parm:           enable_dp_mst:Enable multi-stream transport (MST) for new DisplayPort sinks. (default: true) (bool)
parm:           enable_dpcd_backlight:Enable support for DPCD backlight control (default:false) (bool)
parm:           enable_gvt:Enable support for Intel GVT-g graphics virtualization host support(default:false) (bool)
```

untuk pengguna graphics card selain intel, dapat menyesuaikan perintah pengecekan , sebagai contoh untuk amd dapat menggunakan radeon  atau amdgpu sebagai support terbaru untuk driver amd dan nvidia graphics card dapat menggunakan nouveau.

selanjutnya backup grub config agar bila terjadi sesuatu yang tidak diinginkan dapat di kembalikan seperti semula.

```bash
sudo cp /etc/default/grub /etc/default/grub.bak
```

```bash
sudo nano /etc/default/grub
```

cari bagian ,
```bash
GRUB_CMDLINE_LINUX_DEFAULT=""
```
lalu isikan sebagai berikut, [wiki archlinux](https://wiki.archlinux.org/index.php/Power_management)

pilih opsi dimulai dari yang standar, diikuti setelahnya jika terdapat masalah

* Standar Grub Flag

```bash
acpi_osi=Linux acpi=force acpi_enforce_resources=lax
```

* Untuk beberapa tombol fn yang tidak berfungsi
```bash
acpi_osi=Linux acpi=force acpi_enforce_resources=lax drm.vblankoffdelay=1 acpi_backlight=vendor
```

untuk laptop yang sudah support uefi dan di produksi pada tahun 2011 keatas tambahkan syntax berikut setelah **acpi_osi=Linux**

```bash
acpi_osi='!Windows 2012'
```

beberapa model laptop uefi dapat juga mengganti dengan syntax berikut, 

```bash
acpi_osi=! acpi_osi='Windows 2015'
```
atau juga , 

```bash
acpi_osi=! acpi_osi="Windows 2009"
```

> referensi : 
> - [source code](https://elixir.bootlin.com/linux/v3.17/source/drivers/acpi/osl.c#L104)
> - [More explanation](https://unix.stackexchange.com/questions/110624/what-do-the-kernel-parameters-acpi-osi-linux-and-acpi-backlight-vendor-do/268106#268106)

* Intel Early Kernel Mode Setting untuk module i915.

pada file /etc/mkinitcpio.conf cari bagian **MODULES**

```bash
MODULES=(i915)
```
Lalu, regenerate grub.

```bash
sudo mkinitcpio -P
```

untuk pengguna ubuntu dan turunannya cukup dengan syntax berikut tanpa harus menambahkan `MODULES`, 

```bash
sudo update-grub
```

untuk pengguna intel, tambah syntax berikut pada GRUB_CMDLINE_LINUX_DEFAULT=""
 
```bash
i915.modeset=1
```

* Sembunyikan pesan systemd

Terkadang saat prosesi booting, Akan tampil pesan log systemd , hal ini bagi saya pribadi sangat menggangu, untuk menyembunyikan pesan ini tambahkan pada GRUB_CMDLINE_LINUX_DEFAULT="" syntax berikut,
rd.udev.log-priority=3 loglevel=3

```bash
 rd.udev.log-priority=3 loglevel=3
```

* disable patch spectre {optional} 
Beberapa waktu lalu kita dikejutkan oleh bug cpu bernama spectre, bagi dunia os baik windows,mac, linux, bsd hal ini mengejutkan dan sempat membuat geger. Para pengembang kernel linux khususnya sudah membuat patch  namun hal ini berefek pada penurunan performance. Kita bisa mengignore patch tersebut dengan menambahkan syntax berikut pada GRUB_CMDLINE_LINUX_DEFAULT="" ,

``` bash
nopti spectre_v2=off
```


terakhir install package TLP dan Thermald,

* Install TLP

```bash
sudo pacman -S --needed tlp tlp-rdw iw smartmontools ethtool x86_energy_perf_policy
```
sesuaikan dengan distribusi yang anda gunakan.

* Install ThermalD (khusus processor Intel yang support P-STATE Govenor)

sebelum menginstall pastikan lm_sensors terinstall dan terkonfigurasi,
```bash
sudo pacman -S lm_sensors && sudo sensors-detect
```

install thermald

```bash
sudo pacman -S thermald --noconfirm --needed
```

aktivasi setiap memulai os,

```bash
sudo systemctl enable thermald && \
sudo systemctl start thermald
```

terkahir buat config grub lagi dan update grub.

```bash
sudo mkinitcpio -P && sudo  update-grub
```

Sehingga untuk hasilnya pada file `/etc/default/grub` menjadi,

```bash
...
GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_osi=Linux acpi_osi=! acpi_osi='Windows 2009'  loglevel=3 i915.modeset=1 ipv6.disable=1 rd.udev.log_priority=3 acpi=force acpi_enforce_resources=lax pcie_aspm=force nopti spectre_v2=off"
...
```

untuk artikel selanjutkan saya akan membahas mengenai konfigurasi tampilan linux.


> all reference :
> * [How to Power Saving on Manjaro](https://forum.manjaro.org/t/howto-power-savings-setup-20180906/1445)
> * [Tlp](https://linrunner.de/en/tlp/tlp.html)
> * [Power Management Arch Wiki](https://wiki.archlinux.org/index.php/Power_management)


