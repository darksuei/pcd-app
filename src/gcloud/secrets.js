import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

export async function getGoogleCloudSecret() {
  const client = new SecretManagerServiceClient();

  const [version] = await client.accessSecretVersion({
    name: `projects/semiotic-primer-459114-c6/secrets/pcd-db-secret/versions/latest`,
  });

  return version.payload.data.toString().slice(1, -1);
}

export async function getSecret(name) {
  const secrets = await getGoogleCloudSecret();
  return JSON.parse(secrets || "{}")[name] || null;
}
