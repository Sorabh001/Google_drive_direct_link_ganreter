

document.getElementById('addBtn').addEventListener('click', function() { let inputGroup = document.createElement('div'); inputGroup.classList.add('input-wrapper'); let qualityInput = document.createElement('input'); qualityInput.type = 'number'; qualityInput.className = 'inputq'; qualityInput.placeholder = 'Quality (e.g., 480p)'; inputGroup.appendChild(qualityInput); let sizeInput = document.createElement('input'); sizeInput.type = 'number'; sizeInput.className = 'inputSize'; sizeInput.placeholder = 'Size'; inputGroup.appendChild(sizeInput); let sizeSelect = document.createElement('select'); sizeSelect.className = 'inputs'; let optionMB = document.createElement('option'); optionMB.value = 'MB'; optionMB.text = 'MB'; sizeSelect.appendChild(optionMB); let optionGB = document.createElement('option'); optionGB.value = 'GB'; optionGB.text = 'GB'; sizeSelect.appendChild(optionGB); inputGroup.appendChild(sizeSelect); let urlInput = document.createElement('input'); urlInput.type = 'url'; urlInput.className = 'inputUrl'; urlInput.placeholder = 'Enter URL'; inputGroup.appendChild(urlInput); let bitInput = document.createElement('input'); bitInput.type = 'number'; bitInput.className = 'inputBit'; bitInput.placeholder = 'Bitrate'; inputGroup.appendChild(bitInput); let showBitCheckbox = document.createElement('label'); showBitCheckbox.innerHTML = ` <input type="checkbox" class="showBit"> Show Bitrate `; inputGroup.appendChild(showBitCheckbox); document.getElementById('inputGroup').appendChild(inputGroup); }); document.getElementById('submitBtn').addEventListener('click', function() { let outputBox = document.getElementById('outputBox'); let inputs = document.querySelectorAll('.input-wrapper'); let outputContent = ''; let isValid = true; inputs.forEach(inputWrapper => { let quality = inputWrapper.querySelector('.inputq').value; let size = inputWrapper.querySelector('.inputSize').value; let unit = inputWrapper.querySelector('.inputs').value; let url = inputWrapper.querySelector('.inputUrl').value; let bitInput = inputWrapper.querySelector('.inputBit'); let bitInputValue = bitInput.style.display === 'block' ? bitInput.value : 'N/A'; if (!quality || !size || !unit || !url) { isValid = false; alert('Please fill out all required fields.'); return; } if (bitInput.style.display === 'block') { outputContent += `Quality: ${quality}p, Size: ${size} ${unit}, ${bitInputValue}bit, - ${url}<br>`; } else { outputContent += `Quality: ${quality}p, Size: ${size} ${unit}, - ${url}<br>`; } }); if (isValid) { outputBox.innerHTML = outputContent; outputBox.style.display = 'block'; } }); document.addEventListener('change', function(e) { if (e.target.classList.contains('showBit')) { let bitInput = e.target.closest('.input-wrapper').querySelector('.inputBit'); bitInput.style.display = e.target.checked ? 'block' : 'none'; } }); document.getElementById('outputBox').addEventListener('click', function() { let range = document.createRange(); range.selectNode(this); window.getSelection().removeAllRanges(); window.getSelection().addRange(range); try { document.execCommand('copy'); alert('Output copied to clipboard!'); } catch (err) { alert('Failed to copy output.'); } window.getSelection().removeAllRanges(); });
