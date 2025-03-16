// 烟花特效 - 来自网页41/66优化
        const canvas = document.getElementById('fireworks');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 6 - 3;
                this.speedY = Math.random() * 6 - 3;
                this.color = `hsl(${Math.random()*360}, 100%, 50%)`;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
                ctx.fill();
            }
        }

        let particles = [];
        function createFireworks(x, y) {
            for(let i=0; i<200; i++) {
                particles.push(new Particle(x, y));
            }
        }

        function animate() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if(particle.size <= 0.2) particles.splice(index, 1);
            });
            requestAnimationFrame(animate);
        }
        animate();

        // 按钮交互 - 来自网页11/50
        function startFireworks() {
            document.getElementById('bgm').play();
            createFireworks(Math.random()*canvas.width, Math.random()*canvas.height);
            setTimeout(() => {
                createFireworks(Math.random()*canvas.width, Math.random()*canvas.height);
            }, 500);
        }
		
		// 打开 Lightbox
		function openLightbox(event) {
			// 获取当前点击的图片元素
			const clickedImg = event.target;
			// 获取图片的 src 属性值
			const imgSrc = clickedImg.src;
			const lightbox = document.getElementById('lightbox');
			const lightboxImg = document.getElementById('lightbox-img');
			lightboxImg.src = imgSrc;
			lightbox.classList.add('active');
		}

		// 关闭 Lightbox
		function closeLightbox() {
			const lightbox = document.getElementById('lightbox');
			lightbox.classList.remove('active');
		}

        // 自动播放音乐提示 - 来自网页35
        window.addEventListener('click', () => {
            document.getElementById('bgm').play();
        });