document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heart-container');
    const config = {
        particles: 400,
        scale: 14,
        depth: 80,
        text: 'I love you'
    };

    const createHeart = () => {
        for (let i = 0; i < config.particles; i++) {
            const t = Math.random() * Math.PI * 2;
            
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            let z = (Math.random() - 0.5) * config.depth; 

            x *= config.scale;
            y *= config.scale;

            const el = document.createElement('div');
            el.className = 'love_word';
            el.textContent = config.text;
            
            el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            el.style.animationDelay = `-${Math.random() * 3}s`;

            container.appendChild(el);
        }
    };

    createHeart();
});