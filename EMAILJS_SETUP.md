# Configuration EmailJS pour DOMENEA

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Visitez [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un service email
1. Dans le dashboard EmailJS, cherchez **"Services"** dans la barre latérale gauche
2. Ou allez directement sur : `https://dashboard.emailjs.com/admin`
3. Cliquez sur **"Add New Service"** ou **"Create New Service"**
4. Choisissez votre fournisseur email :
   - **Gmail** (le plus courant)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Ou autre SMTP**
5. Pour Gmail :
   - Connectez-vous avec votre compte Google
   - Autorisez EmailJS à accéder à votre Gmail
   - Le service sera créé automatiquement
6. **IMPORTANT** : Notez votre **Service ID** (exemple: `service_xxxxxxx`)

### 3. Créer un template d'email
1. Dans la barre latérale, cliquez sur **"Email Templates"**
2. Ou allez sur : `https://dashboard.emailjs.com/admin/templates`  
3. Cliquez sur **"Create New Template"**
4. Configurez votre template avec les variables suivantes :

```html
Subject: Nouvelle demande de brochure - {{project}}

Bonjour,

Nouvelle demande de brochure reçue :

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Société: {{company}}
Projet d'intérêt: {{project}}
Budget: {{budget}}
Offre: {{offer}}

Message: {{message}}

Cordialement,
Le site DOMENEA
```

4. Notez votre **Template ID**

### 4. Obtenir votre clé publique
1. Dans la barre latérale, cliquez sur **"Account"**
2. Ou allez sur : `https://dashboard.emailjs.com/admin/account`
3. Cherchez la section **"API Keys"** ou **"General"**
4. Copiez votre **"Public Key"** (exemple: `xxxxxxxxxxxxxxx`)
5. **Note** : Ne partagez jamais cette clé publiquement dans votre code source !

### 5. Configurer le projet
1. Installez la dépendance :
```bash
npm install @emailjs/browser
```

2. Modifiez le fichier `src/config/emailjs.ts` :
```typescript
export const emailjsConfig = {
  serviceId: "votre_service_id", // Remplacez par votre Service ID
  templateId: "votre_template_id", // Remplacez par votre Template ID  
  publicKey: "votre_public_key", // Remplacez par votre Public Key
};
```

### 6. Variables d'environnement (optionnel)
Vous pouvez aussi utiliser des variables d'environnement :

1. Créez un fichier `.env` à la racine du projet :
```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

2. Modifiez `src/config/emailjs.ts` :
```typescript
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id", 
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key",
};
```

## Test
Après configuration, testez le formulaire de demande de brochure sur votre site pour vérifier que les emails sont bien envoyés.

## Limites du plan gratuit
- 200 emails/mois
- Branding EmailJS dans les emails
- Support communautaire

Pour plus d'emails ou supprimer le branding, considérez un plan payant.
