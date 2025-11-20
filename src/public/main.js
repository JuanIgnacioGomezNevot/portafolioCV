// ========================================
// MODO OSCURO/CLARO
// ========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Cargar preferencia del usuario
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
	body.classList.add('light-mode');
}

themeToggle?.addEventListener('click', () => {
	body.classList.toggle('light-mode');
	const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
	localStorage.setItem('theme', theme);
	
	// Animación del botón
	themeToggle.style.transform = 'rotate(360deg)';
	setTimeout(() => {
		themeToggle.style.transform = 'rotate(0deg)';
	}, 300);
});

// ========================================
// SCROLL TO TOP
// ========================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollToTopBtn?.classList.add('visible');
	} else {
		scrollToTopBtn?.classList.remove('visible');
	}
});

scrollToTopBtn?.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// ========================================
// ANIMACIONES AL SCROLL (Intersection Observer)
// ========================================
// Animaciones desactivadas para mejor experiencia de scroll

// ========================================
// FORMULARIO DE CONTACTO
// ========================================
// El formulario usa Formspree con método POST estándar
// Si quieres mantener al usuario en la página, desactiva reCAPTCHA en:
// https://formspree.io/forms/xgebeaer/settings

// ========================================
// EFECTOS HOVER EN TECH BADGES
// ========================================
document.querySelectorAll('.tech-badge').forEach(badge => {
	badge.addEventListener('mouseenter', function() {
		this.style.transform = 'translateY(-2px) scale(1.05)';
	});
	
	badge.addEventListener('mouseleave', function() {
		this.style.transform = 'translateY(0) scale(1)';
	});
});

// ========================================
// ANIMACIÓN DEL LOGO
// ========================================
const logo = document.querySelector('.logo');
logo?.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// ========================================
// PARALLAX EFECTO EN EL HERO
// ========================================
// Efecto parallax desactivado para mejor rendimiento

// ========================================
// EFECTO DE ESCRITURA EN EL NOMBRE
// ========================================
function typeWriter(element, text, speed = 100) {
	let i = 0;
	element.textContent = '';
	
	function type() {
		if (i < text.length) {
			element.textContent += text.charAt(i);
			i++;
			setTimeout(type, speed);
		}
	}
	
	type();
}

// Activar efecto cuando la página carga
window.addEventListener('load', () => {
	const nameTitle = document.querySelector('.name-title');
	if (nameTitle) {
		const originalText = nameTitle.textContent;
		typeWriter(nameTitle, originalText, 80);
	}
});

// ========================================
// CAMBIO DE IDIOMA (Placeholder)
// ========================================
const langToggle = document.getElementById('langToggle');
let currentLang = 'es';

langToggle?.addEventListener('click', () => {
	currentLang = currentLang === 'es' ? 'en' : 'es';
	
	// Aquí puedes agregar la lógica para cambiar el idioma
	console.log(`Idioma cambiado a: ${currentLang}`);
	
	// Animación del botón
	langToggle.style.transform = 'scale(0.9)';
	setTimeout(() => {
		langToggle.style.transform = 'scale(1)';
	}, 200);
});

// ========================================
// CURSOR PERSONALIZADO (OPCIONAL)
// ========================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
	cursor.style.left = e.clientX + 'px';
	cursor.style.top = e.clientY + 'px';
});

// Agregar estilos del cursor
const style = document.createElement('style');
style.textContent = `
	.custom-cursor {
		width: 10px;
		height: 10px;
		border: 2px solid var(--accent-primary);
		border-radius: 50%;
		position: fixed;
		pointer-events: none;
		transition: transform 0.1s ease;
		z-index: 9999;
		opacity: 0.7;
	}
	
	@media (max-width: 768px) {
		.custom-cursor {
			display: none;
		}
	}
`;
document.head.appendChild(style);

// ========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// ========================================
// CONTADOR DE VISITAS (OPCIONAL)
// ========================================
let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
visitCount++;
localStorage.setItem('visitCount', visitCount.toString());
console.log(`Esta es tu visita número ${visitCount}`);

// ========================================
// ANIMACIÓN DE PARTÍCULAS EN EL FONDO (OPCIONAL)
// ========================================
function createParticles() {
	const particlesContainer = document.createElement('div');
	particlesContainer.style.cssText = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
		overflow: hidden;
	`;
	
	for (let i = 0; i < 30; i++) {
		const particle = document.createElement('div');
		particle.style.cssText = `
			position: absolute;
			width: 2px;
			height: 2px;
			background: var(--accent-primary);
			border-radius: 50%;
			top: ${Math.random() * 100}%;
			left: ${Math.random() * 100}%;
			opacity: ${Math.random() * 0.5};
			animation: float ${5 + Math.random() * 10}s linear infinite;
		`;
		particlesContainer.appendChild(particle);
	}
	
	document.body.appendChild(particlesContainer);
}

// Agregar animación de flotación
const floatStyle = document.createElement('style');
floatStyle.textContent = `
	@keyframes float {
		0% {
			transform: translateY(0) translateX(0);
		}
		50% {
			transform: translateY(-20px) translateX(10px);
		}
		100% {
			transform: translateY(0) translateX(0);
		}
	}
`;
document.head.appendChild(floatStyle);

// Activar partículas
createParticles();

console.log('%c¡Portafolio cargado con éxito! 🚀', 'color: #00ffcc; font-size: 20px; font-weight: bold;');
