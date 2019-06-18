---
title: "Setup Vga Amd Pada Manjaro Linux"
category: linux
author: Yunindyo Prabowo
---

Assalamualaikum temen-temen pembaca sekalian. Pada kesempatan sebelumnya saya telah membuat artikel mengenai _Hal-hal apa saja yang saya lakukan setelah menginstall Linux_ yang dapat kalian baca disini [Linux First Install](/Linux-First-Install). Dalam kesempatan kali ini saya akan membahas mengenai apa saja yang saya lakukan untuk mengkonfigurasi desktop linux saya agar dapat maksimal menggunakan resource terutama vga eksternal atau hybrid graphics agar bisa digunakan untuk bermain game seperti steam.
referensi [wiki archlinux](https://wiki.archlinux.org/index.php/Power_management)

Untuk spesifikasi Laptop yang saya gunakan,

### Specifications


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

### Pembukaan

Pada dasarnya, kernel linux mendukung kartu grafis seperti Nvidia, Amd, ataupun Intel. Hanya saja dalam beberapa kasus seperti bermain game, diperlukan sedikit pengaturan agar kartu-kartu grafis tersebut dapat bekerja dengan baik, terlebih banyak generasi komputer atau laptop terbaru yang biasanya membawa 2 kartu grafis sekaligus atau dalam hal ini disebut sebagai _Hybrid Graphic Cards_.

Dalam tutorial ini, saya akan menjelaskan pengaturan untuk kartu grafis intel sebagai bawaan processor dan Radeon sebagai eksternal yang sewaktu-waktu saya gunakan untuk bermain game steam seperti CSGo.

### Langkah Pertama, check default module kernel

Untuk kartu grafis radeon, utamanya dukungan terhadap firmware kernel dapat di cek menggunakan syntax berikut, 

```bash
modinfo radeon
```
atau
```bash
modinfo amdgpu
```
dan juga mengecek driver mana yang telah diload sebagai main driver untuk kartu grafis amd dengan perintah berikut.

```bash
dmesg | grep -i "radeon\|amdgpu"
```
jika hasilnya seperti ini, maka dapat dipastikan bahwa module yang diload adalah radeon,

```bash
[    0.859494] [drm] radeon kernel modesetting enabled.
[    0.860513] radeon 0000:01:00.0: enabling device (0400 -> 0403)
[    0.870454] radeon 0000:01:00.0: VRAM: 2048M 0x0000000000000000 - 0x000000007FFFFFFF (2048M used)
[    0.870455] radeon 0000:01:00.0: GTT: 2048M 0x0000000080000000 - 0x00000000FFFFFFFF
[    0.870532] [drm] radeon: 2048M of VRAM memory ready
[    0.870532] [drm] radeon: 2048M of GTT memory ready.
[    0.879182] [drm] radeon: dpm initialized
[    0.880203] [drm] enabling PCIE gen 3 link speeds, disable with radeon.pcie_gen2=0
[    2.237318] radeon 0000:01:00.0: WB enabled
[    2.237321] radeon 0000:01:00.0: fence driver on ring 0 use gpu addr 0x0000000080000c00 and cpu addr 0xffff928bf1ba9c00
[    2.237322] radeon 0000:01:00.0: fence driver on ring 1 use gpu addr 0x0000000080000c04 and cpu addr 0xffff928bf1ba9c04
[    2.237323] radeon 0000:01:00.0: fence driver on ring 2 use gpu addr 0x0000000080000c08 and cpu addr 0xffff928bf1ba9c08
[    2.237324] radeon 0000:01:00.0: fence driver on ring 3 use gpu addr 0x0000000080000c0c and cpu addr 0xffff928bf1ba9c0c
[    2.237325] radeon 0000:01:00.0: fence driver on ring 4 use gpu addr 0x0000000080000c10 and cpu addr 0xffff928bf1ba9c10
[    2.237327] radeon 0000:01:00.0: radeon: MSI limited to 32-bit
[    2.237365] radeon 0000:01:00.0: radeon: using MSI.
[    2.237381] [drm] radeon: irq initialized.
[    2.445000] [drm] Radeon Display Connectors
[    2.446237] [drm] Initialized radeon 2.50.0 20080528 for 0000:01:00.0 on minor 0
[    5.354608] [drm] amdgpu kernel modesetting enabled.
```
jika hasilnya sebaliknnya maka module yang diload adalah AMDGPU.

Untuk yang bingung apakah amdgpu dan radeon pada istilah ini, maka dapat membaca artikel berikut. [Radeon](https://wiki.archlinux.org/index.php/ATI), [AMDGPU](https://wiki.archlinux.org/index.php/AMDGPU).

Pada dasarnya perbedaan mendasar antara `amdgpu` dan `radeon` adalah dukungannya terhadap generasi terbaru dari kartu grafis radeon, untuk kartu grafis _GCN 1.1_ ke atas umumnya telah mendapat dukungan penuh module terbaru yaitu `AMDGPU` sedangkan untuk versi dibawahnya yaitu `GCN 1.0` module `AMDGPU` masih merupakan experimental feature, jadi masih terdapat beberapa bug ataupun perubahan-perubahn signifikan yang mempengaruhi performa walaupun tidak menutup kemungkinan untuk dukungan penuh sekalipun.

Referensi untuk GCN dapat dibaca [disini](https://en.wikipedia.org/wiki/Graphics_Core_Next)
atau anda dapat mencari secara manual tipe dari kartu grafis yang anda gunakan dan dicocokan dengan tabel berikut.

### AMD GRAPHIC CARDS MODULES
| GPU Architecture | Opensource Driver | Proprietary Driver |
|:--:|:--:|:--:|
|GCN 4 or NEWER|AMDGPU|AMDGPU PRO|
|GCN 3|AMDGPU|AMDGPU PRO/Catalyst|
|GCN 2|AMDGPU*/Radeon|Catalyst|
|GCN 1|AMDGPU*/Radeon|Catalyst|
|Terascale 2 &3|AMDGPU|Catalyst|
|Terscale 1|AMDGPU|Catalyst|
|Oldr|AMDGPU|Not Available|

> _*experimental feature_

Setelah mengetahui driver mana yang telah diload dan termasuk generasi dengan arsitektur apa yang sesuai dengan kartu grafis anda maka langkah selanjutnnya yaitu menginstall driver-driver yang diperlukan.

> **NOTE: Cara ini merupakan cara untuk menggunakan opensource driver, jika anda memilih untuk menggunakan proprietary driver silahkan disesuaikan dengan ketersedian driver pada situs resmi AMD**


* Untuk yang menggunakan driver Radeon.
    - install mesa package.
        ```bash
        sudo pacman -S lib32-mesa xf86-video-ati mesa-vdpau lib32-mesa-vdpau
        ```
    Umumnya jika kartu grafik anda disupport oleh driver radeon maka secara otomatis driver ini akan diload dengan sendirinya, namun jika tidak maka anda bisa meload secara manual pada `/etc/mkinitcpio.conf` pada module array tambahkan (tanpa titik),

    ```bash
    MODULES=(... radeon ...)
    ```

    lalu pada file `/etc/defaul/grub`, tambahkan kernel parameter berikut.

    ```bash
     radeon.dpm=1 radeon.audio=1 radeon.aspm=0 radeon.bapm=0 radeon.runpm=0 radeon.si_support=1
    ```
    pada `GRUB_CMDLINE_LINUX_DEFAULT` sehingga menjadi seperti ini, *ikuti tutorial sebelum ini [Linux First Install](/Linux-First-Install)*

    ```bash
     GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_osi=Linux acpi_osi=! acpi_osi='Windows 2009'  loglevel=3 i915.modeset=1 ipv6.disable=1 rd.udev.log_priority=3 acpi=force acpi_enforce_resources=lax pcie_aspm=force nopti spectre_v2=off 
     radeon.dpm=1 radeon.audio=1 radeon.aspm=0 radeon.bapm=0 radeon.runpm=0 radeon.si_support=1"
     ```
     dilanjutkan dengan mengenerate image baru dan mengupdate-grub
     ```bash
     sudo pacman -S mkinitcpio -P && sudo update-grub
     ```

     > **untuk pengguna ubuntu dan turunannya seperti mint, lakukan hanya pada penambahan kernel parameter dan cukup dengan mengupdate grub.**

* Untuk pengguna AMDGPU
    - install mesa package.
        ```bash
        sudo pacman -S lib32-mesa xf86-video-amdgpu mesa-vdpau lib32-mesa-vdpau lib32-vulkan-radeon vulkan-radeon libva-mesa-driver lib32-libva-mesa-driver
        ```
    - aktivasi GCN Version Kernel Parameter pada `/etc/default/grub`
        * untuk `Southern Island (SI)` `radeon.si_support=0 amdgpu.si_support=1`
        * untuk `Sea Island (CIK)` `radeon.cik_support=0 amdgpu.cik_support=1`

    - Tambahkan pula kernel parameter berikut (sesuaikan si/cik sesuai gcn version kartu grafis anda, dalam kasus saya, yaitu Southern Island), 
    
    ```bash
    amdgpu.si_support=1 radeon.si_support=0 amdgpu.runpm=0 amdgpu.aspm=0 amdgpu.dpm=1 amdgpu.sound=1
    ```

    sehingga pada `GRUB_CMDLINE_LINUX_DEFAULT` menjadi,
    ```bash
    GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_osi=Linux acpi_osi=! acpi_osi='Windows 2009'  loglevel=3 i915.modeset=1 ipv6.disable=1 rd.udev.log_priority=3 acpi=force acpi_enforce_resources=lax pcie_aspm=force nopti spectre_v2=off 
    amdgpu.si_support=1 radeon.si_support=0 amdgpu.runpm=0 amdgpu.aspm=0 amdgpu.dpm=1 amdgpu.sound=1"
    ```

    untuk yang menggunakan gcn 1.1 keatas tambahkan juga pada kernel parameter
    ```bash
    amdgpu.dc=1
    ```
    kemudian pada file `/etc/mkinitcpio.conf` tambahkan modules,
    ```bash
    MODULES=(amdgpu radeon i915)
    ```
    dilanjutkan dengan mengenerate image baru dan mengupdate-grub
     ```bash
     sudo pacman -S mkinitcpio -P && sudo update-grub
     ```
    > **untuk pengguna ubuntu dan turunannya seperti mint, lakukan hanya pada penambahan kernel paratemer dan cukup dengan mengupdate grub.**
     
Langkah terakhir yaitu restart dan cek apakah terdapat error menggunakan syntax berikut.

```bash
dmesg | grep -i "radeon\|amdgpu"
```

jika tidak ada error, maka selamat, anda berhasil membuat kartu grafis amd anda aktif dan siap untuk bermain game.

Untuk menswitch kartu grafis yang anda gunakan, anda dapat melakukan menggunakan syntax

```bash
DRI_PRIME=1 namaapps
```

Untuk pengguna Steam, pada list gamenya, click kanan kemudian pilih `properties` lalu pada
menu `Set Launch Options` tambahkan syntax berikut.

```bash
DRI_PRIME=1 %command%
```

restart steamnya kemudian mainkan gamenya.

Jika ada pertanyaan, dapat anda tanyakan pada kolom komentar dibawah, see youuuu.

> REFERENCE
> * [Radeon](https://wiki.archlinux.org/index.php/ATI)
> * [AMDGPU](https://wiki.archlinux.org/index.php/AMDGPU)
> * [PRIME](https://wiki.archlinux.org/index.php/PRIME) 