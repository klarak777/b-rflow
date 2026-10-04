import re
import json

with open('stitch_ui.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
if body_match:
    body = body_match.group(1)
    body = body.replace('class=', 'className=')
    body = body.replace('for=', 'htmlFor=')
    body = body.replace('checked=""', 'defaultChecked')
    body = body.replace('disabled=""', 'disabled')
    body = body.replace('style="width: 66.6%;"', 'style={{width: \'66.6%\'}}')
    body = body.replace('style="width: 70%"', 'style={{width: \'70%\'}}')
    body = body.replace('style="width: 98.3%"', 'style={{width: \'98.3%\'}}')
    body = body.replace('style="width: 35%"', 'style={{width: \'35%\'}}')
    body = body.replace('style="width: 12%"', 'style={{width: \'12%\'}}')
    body = body.replace('style="width: 100%"', 'style={{width: \'100%\'}}')
    
    body = re.sub(r'(<img[^>]+)(?<!/)>', r'\1 />', body)
    body = re.sub(r'(<input[^>]+)(?<!/)>', r'\1 />', body)
    body = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', body, flags=re.DOTALL)
    
    react_code = 'export default function Home() {\n  return (\n    <>\n      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />\n' + body + '\n    </>\n  );\n}'
    
    with open('src/app/page.tsx', 'w', encoding='utf-8') as out:
        out.write(react_code)

config_match = re.search(r'colors:(\{.*?\})', html)
if config_match:
    colors = json.loads(config_match.group(1).replace("'", '"'))
    css_vars = '\n'.join([f'  --color-{k}: {v};' for k, v in colors.items()])
    
    with open('src/app/globals.css', 'r', encoding='utf-8') as css_f:
        css_file = css_f.read()
    
    css_file = re.sub(r'@theme \{', '@theme {\n' + css_vars, css_file)
    
    with open('src/app/globals.css', 'w', encoding='utf-8') as css_f:
        css_f.write(css_file)

print('Conversion complete')
