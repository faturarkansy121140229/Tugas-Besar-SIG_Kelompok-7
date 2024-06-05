<?php
    include "admin/konek.php";
    $berita = mysqli_query($konek," SELECT * FROM berita ORDER BY id ASC ");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jambi</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>
      <div class="layar-dalam">
        <div class="logo">
          <a href=""><img src="asset/logo_kota_jambi.png" class="putih" /></a>
          <a href=""><img src="asset/logo_kota_jambi.png" class="hitam" /></a>
          KOTA JAMBI
        </div>
        <div class="menu">
          <a href="#" class="tombol-menu">
            <span class="garis"></span>
            <span class="garis"></span>
            <span class="garis"></span>
          </a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#blog">Berita</a></li>
            <li><a href="#gallery">Galeri</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="admin/login.php" class="tombol">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="layar-penuh">
      <header id="home">
        <div class="overlay"></div>
        <video autoplay muted loop>
          <source src="asset/video-indonesia.mp4" type="video/mp4" />
        </video>
        <div class="intro">
          <h3>Peta Tutupan Lahan dan Kondisi Tanah</h3><br><br>
          <h3>di Kota Jambi</h3><br>
          <p>
            
          </p>
          <p>
            <a href="" class="tombol">MORE INFO</a>
          </p>
        </div>
      </header>
      <main>
        <section id="menu">
          <div class="layar-dalam">
            <h3>Menu</h3>
            <p class="ringkasan">
              Kumpulan Peta Informasi Geografis Kota Jambi yang diintegrasikan menjadi sebuah Sistem Informasi Geografis
            </p>
            <div class="konten-isi">
              <p>
                Pada aplikasi berbasis website ini, terdapat beberapa menu yang menghadirkan informasi geografis di kota Jambi dalam berbagai bentuk. 
                Jenis-jenis peta yang dihadirkan diantaranya adalah Peta Tutupan Lahan, Peta Hidrogeologi, Peta Geomorfologi, Peta Geologi, Peta Jenis Tanah, dan Peta Kontur Tanah. Website ini dibuat dengan tujuan
                untuk memberikan informasi akan penggunaan lahan ataupun pembukaan lahan berdasarkan tutupan lahan dan kondisi pertanahan yang tersedia
                di wilayah kota Jambi.
              </p>
            </div>
          </div>
        </section>
        <section class="abuabu" id="support">
          <div class="layar-dalam support">
            <div>
              <img src="asset/tutupan_lahan.png" />
              <h6>Peta Tutupan Lahan</h6>
              <p>
                Berisi informasi penggunaan lahan baik dalam segi vegetasi, maupun pemukiman masyarakat.
              </p>
              <a href="tutupan_lahan/tutupan_lahan.html" class="tombol">Buka Peta</a>
            </div>
            <div>
              <img src="asset/hidrogeologi.png" />
              <h6>Peta Hidrogeologi</h6>
              <p>
              Berisi informasi distribusi dan pergerakan air tanah dalam media berpori di bawah permukaan tanah yang terdapat di Kota Jambi
              </p>
              <a href="hidrogeologi/hidrogeologi.html" class="tombol">Buka Peta</a>
            </div>
            
            <div>
              <img src="asset/geomorfologi.png" />
              <h6>Peta Geomorfologi</h6>
              <p>
                Berisi informasi klasifikasi sistem tanah yang terdapat di Kota Jambi
              </p>
              <a href="geomorfologi/geomorfologi.html" class="tombol">Buka Peta</a>
            </div>
          </div>
          <div class="layar-dalam support">
            <div>
              <img src="asset/geologi.png" />
              <h6>Peta Geologi</h6>
              <p>
                 Berisi informasi klasifikasi geologi yang terdapat di Kota Jambi
              </p>
              <a href="geologi/geologi.html" class="tombol">Buka Peta</a>
            </div>
            <div>
              <img src="asset/jenis_tanah.png" />
              <h6>Peta Jenis Tanah</h6>
              <p>
                Berisi informasi klasifikasi jenis-jenis tanah di Kota Jambi
              </p>
              <a href="jenis_tanah/jenis_tanah.html" class="tombol">Buka Peta</a>
            </div>
            <div>
              <img src="asset/kontur_tanah.png" />
              <h6>Peta Kontur Tanah</h6>
              <p>
                Berisi informasi kelerengan/kontur tanah yang terdapat di Kota Jambi
              </p>
              <a href="kontur_tanah/kontur_tanah.html" class="tombol">Buka Peta</a>
            </div>
          </div>
        </section>
        <section class="abuabu" id="blog">
          <div class="layar-dalam">
            <h3>Berita</h3>
            <p class="ringkasan">
              Berikut beberapa berita terbaru
            </p>
            <div class="blog">
              <?php
                while ($data = mysqli_fetch_array($berita)) {
              ?>
              <div class="area">
                <div
                  class="gambar"
                  style="background-image: url('asset/berita/<?php echo $data['image'];?>')"
                ></div>
                <div class="text">
                  <article>
                    <h4><a href="#"><?php echo $data['judul']; ?></a></h4>
                    <p>
                      <?php
                        echo $data['deskripsi'];
                      ?>
                    </p>
                  </article>
                </div>
              </div>
              <?php
                }
              ?>
            </div>
          </div>
        </section>
        <section id="gallery">
          <div><img src="asset/foto1.png" /></div>
          <div><img src="asset/foto2.png" /></div>
          <div><img src="asset/foto3.png" /></div>
          <div><img src="asset/foto4.png" /></div>
          <div><img src="asset/foto5.png" /></div>
          <div><img src="asset/foto6.png" /></div>
          <div><img src="asset/foto7.png" /></div>
          <div><img src="asset/foto8.png" /></div>
        </section>
        <section class="quote">
          <div class="layar-dalam">
            <p>Semoga bermanfaat & terimakasih.</p>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div class="layar-dalam">
          <div>
            <h5>Sitemap</h5>
            Institut Teknologi Sumatera
            <a href=https://maps.app.goo.gl/hDnZ6yVWoEENnGwB8>https://maps.app.goo.gl/hDnZ6yVWoEENnGwB8</a>
          </div>
          <div>
            <h5>Present by</h5>
            <img src="asset/kelompok7.png" />
          </div>

          <div>
            <h5>Contact us</h5>
            Email : *****@student.itera.ac.id
              </div>
          
        </div>
        <div class="layar-dalam">
          <div class="copyright">&copy; 2024 Sistem Informasi Geografis Kelompok 7 ITERA</div>
        </div>
      </footer>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script src="javascript.js"></script>
  </body>
</html>
