// Supabase Configuration
// Cole aqui sua URL e Chave Pública Anon (encontradas em Project Settings > API no Supabase)
const SUPABASE_URL = 'https://mmynmksrglojwcrupkqq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__0jcIsNfF9aYTSGgqIkkMA_hXTxy0QO';

// Inicializa o cliente do Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Adiciona um listener quando o HTML da página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura o formulário pelo ID
    const contactForm = document.getElementById('contactForm');

    // Se a página atual tiver o formulário (no nosso caso contato.html)
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            // Previne que a página recarregue ao clicar em enviar
            e.preventDefault();

            // Pega os valores que o usuário digitou
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            try {
                // Tenta inserir na tabela 'contato' do Supabase
                const { data, error } = await supabaseClient
                    .from('contato') // O nome da tabela exata no seu Supabase
                    .insert([
                        { nome: name, email: email, mensagem: message }
                    ]);

                if (error) {
                    console.error('Erro ao enviar:', error);
                    alert("Ops, aconteceu um erro. Verifique Console para detalhes ou suas chaves do Supabase.");
                } else {
                    alert("Que maravilha! Sua mensagem foi enviada com muito carinho.");
                    contactForm.reset(); // Limpa os campos após enviar
                }
                
            } catch (err) {
                console.error("Erro inesperado:", err);
                alert("Erro inesperado :(");
            }
        });
    }

});
