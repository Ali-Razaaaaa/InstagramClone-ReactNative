import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { addUserPost } from '../../store/postsSlice';
import { colors } from '../../theme';
import AppModal from '../../modals/AppModal';
import styles from './style';

export const AddScreen = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ visible: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ visible: true, title, message, type });
  };

  const closeModal = () => setModal(prev => ({ ...prev, visible: false }));

  const openGallery = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.8, includeBase64: false },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          showModal('Gallery Error', response.errorMessage || 'Could not open gallery.', 'error');
          return;
        }
        const asset = response.assets?.[0];
        if (asset) {
          setSelectedImage(asset);
        }
      }
    );
  };

  const openCamera = () => {
    launchCamera(
      { mediaType: 'photo', quality: 0.8, saveToPhotos: true },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          showModal('Camera Error', response.errorMessage || 'Could not open camera.', 'error');
          return;
        }
        const asset = response.assets?.[0];
        if (asset) {
          setSelectedImage(asset);
        }
      }
    );
  };

  const handleShare = () => {
    if (!selectedImage) {
      showModal('No Photo', 'Please choose or take a photo first.', 'error');
      return;
    }

    setLoading(true);
    // Simulate upload — in production, upload to Firebase Storage here
    setTimeout(() => {
      dispatch(addUserPost({
        id: `user-post-${Date.now()}`,
        imageUri: selectedImage.uri,
        caption: caption.trim(),
        timestamp: Date.now(),
      }));
      setLoading(false);
      setSelectedImage(null);
      setCaption('');
      showModal('Posted!', 'Your photo has been shared successfully.', 'success');
    }, 1200);
  };

  const renderTopBar = () => (
    <View style={styles.topBar}>
      <Text style={styles.topBarTitle}>New Post</Text>
      {selectedImage && (
        <TouchableOpacity onPress={handleShare} activeOpacity={0.7} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.accent} />
          ) : (
            <Text style={styles.shareBtn}>Share</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );

  const renderImagePreview = () => {
    if (selectedImage) {
      return (
        <Image source={{ uri: selectedImage.uri }} style={styles.previewImage} resizeMode="cover" />
      );
    }
    return (
      <View style={styles.iconContainer}>
        <Icon name="add-photo-alternate" size={72} color={colors.textMuted} />
      </View>
    );
  };

  const renderCaption = () => {
    if (!selectedImage) return null;
    return (
      <TextInput
        style={styles.captionInput}
        placeholder="Write a caption…"
        placeholderTextColor={colors.placeholder}
        value={caption}
        onChangeText={setCaption}
        multiline
        maxLength={2200}
      />
    );
  };

  const renderButtons = () => (
    <View style={{ width: '100%' }}>
      <TouchableOpacity style={styles.primaryButton} onPress={openGallery} activeOpacity={0.85}>
        <Text style={styles.primaryButtonText}>Choose from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} onPress={openCamera} activeOpacity={0.85}>
        <Text style={styles.secondaryButtonText}>Take a Photo</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTopBar()}
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {renderImagePreview()}
        {!selectedImage && (
          <>
            <Text style={styles.title}>Create</Text>
            <Text style={styles.subtitle}>Share a photo or video with your followers.</Text>
          </>
        )}
        {renderCaption()}
        {renderButtons()}
      </ScrollView>

      <AppModal
        visible={modal.visible}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={closeModal}
      />
    </View>
  );
};
