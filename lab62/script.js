document.getElementById('solve-btn').addEventListener('click', solveQuadratic);

function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    const solutionElement = document.getElementById('solution-result');
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        solutionElement.innerHTML = '错误：请输入有效的数字';
        solutionElement.style.color = '#e74c3c';
        return;
    }
    
    if (a === 0) {
        if (b === 0) {
            solutionElement.innerHTML = c === 0 
                ? '无穷解（恒等式）' 
                : '无解（矛盾方程）';
        } else {
            const root = -c / b;
            solutionElement.innerHTML = `退化为一元一次方程：x = ${formatNumber(root)}`;
        }
        return;
    }
    
    const discriminant = b * b - 4 * a * c;
    const epsilon = 1e-10;
    
    if (discriminant > epsilon) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutionElement.innerHTML = `
            实数解：<br>
            x₁ = ${formatNumber(root1)}<br>
            x₂ = ${formatNumber(root2)}
        `;
        solutionElement.style.color = '#27ae60';
        
    } else if (Math.abs(discriminant) < epsilon) {
        const root = -b / (2 * a);
        solutionElement.innerHTML = `重根解：x = ${formatNumber(root)}`;
        solutionElement.style.color = '#f39c12';
        
    } else {
        const realPart = -b / (2 * a);
        const imagPart = Math.sqrt(-discriminant) / (2 * a);
        
        solutionElement.innerHTML = `
            <span class="complex">复数解：</span><br>
            <span class="complex">x₁ = ${formatComplex(realPart, imagPart)}</span><br>
            <span class="complex">x₂ = ${formatComplex(realPart, -imagPart)}</span>
        `;
        solutionElement.style.color = '#9b59b6';
    }
}

function formatNumber(num) {
    return Math.abs(num - Math.round(num)) < 1e-5 
        ? Math.round(num) 
        : num.toFixed(2);
}

function formatComplex(real, imag) {
    const realStr = formatNumber(real);
    const imagStr = formatNumber(Math.abs(imag));
    
    if (Math.abs(imag) < 1e-5) return realStr;
    if (Math.abs(real) < 1e-5) return `${imagStr}i`;
    
    const operator = imag >= 0 ? '+' : '-';
    return `${realStr} ${operator} ${imagStr}i`;
}