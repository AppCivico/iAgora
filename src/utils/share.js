import { i18n } from '@/i18n';

const canShare = navigator.share;

export default function share() {
  const url = window.location.href;

  if (!canShare) {
    navigator.clipboard.writeText(url);
    alert(i18n.global.t("share.copied"));
    return;
  }

  navigator.share({
    title: i18n.global.t("share.title"),
    text: i18n.global.t("share.text"),
    url,
  });
};
